package com.fanta.fixify;

import com.github.javafaker.Faker;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import static com.fanta.fixify.DataBaseConfig.*;

public class DatabaseManager {

    private final Faker faker = new Faker();

    private Connection connect() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    public void addUsers(int count) {
        String query = "INSERT INTO users (email, password_hash, full_name, phone_number, address, registration_date, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                pstmt.setString(1, faker.internet().emailAddress());
                pstmt.setString(2, faker.internet().password());
                pstmt.setString(3, faker.name().fullName());
                pstmt.setString(4, faker.phoneNumber().phoneNumber());
                pstmt.setString(5, faker.address().fullAddress());
                pstmt.setTimestamp(6, new java.sql.Timestamp(System.currentTimeMillis()));
                pstmt.setString(7, faker.options().option("ADMIN", "USER", "MANAGER"));
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void addCategories(int count) {
        String query = "INSERT INTO categories (category_name, parent_id) VALUES (?, ?)";
        Set<String> categoryNames = new HashSet<>();
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                String categoryName = faker.commerce().department() + " " + faker.number().digits(5);
                while (categoryNames.contains(categoryName)) {
                    categoryName = faker.commerce().department() + " " + faker.number().digits(5);
                }
                categoryNames.add(categoryName);
                pstmt.setString(1, categoryName);
                pstmt.setObject(2, null); // Assuming parent_id is nullable and can be null
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }



    public void addTasks(int count) {
        String query = "INSERT INTO tasks (task_name, category_id) VALUES (?, ?)";
        Set<String> taskNames = new HashSet<>();
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                String taskName = faker.job().title();
                while (taskNames.contains(taskName)) {
                    taskName = faker.job().title();
                }
                taskNames.add(taskName);
                pstmt.setString(1, taskName);
                pstmt.setInt(2, faker.number().numberBetween(1, 10)); // Assuming category_id is between 1 and 10
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println("Помилка при додаванні задач: " + e.getMessage());
        }
    }

    public void addSpecialists(int count) {
        String query = "INSERT INTO specialists (user_id, category_id, description, rating, services_offered) VALUES (?, ?, ?, ?, ?)";
        Set<Integer> userIds = new HashSet<>();
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                int userId = faker.number().numberBetween(1, 200); // Assuming user_id is between 1 and 50
                while (userIds.contains(userId)) {
                    userId = faker.number().numberBetween(1, 200);
                }
                userIds.add(userId);
                pstmt.setInt(1, userId);
                pstmt.setInt(2, faker.number().numberBetween(1, 10)); // Assuming category_id is between 1 and 10
                pstmt.setString(3, faker.lorem().sentence());
                pstmt.setDouble(4, faker.number().randomDouble(2, 0, 5));
                pstmt.setString(5, faker.lorem().sentence());
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println("Помилка при додаванні задач: " + e.getMessage());
        }
    }
    public void addTowns(int count) {
        String query = "INSERT INTO towns (town_name) VALUES (?)";
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                pstmt.setString(1, faker.address().city());
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void addProjects(int count) {
        String query = "INSERT INTO projects (user_id, specialist_id, category_id, title, description, budget, date_posted) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                pstmt.setInt(1, faker.number().numberBetween(1, 50)); // Assuming user_id is between 1 and 50
                pstmt.setInt(2, faker.number().numberBetween(1, 50)); // Assuming specialist_id is between 1 and 50
                pstmt.setInt(3, faker.number().numberBetween(1, 10)); // Assuming category_id is between 1 and 10
                pstmt.setString(4, faker.lorem().sentence());
                pstmt.setString(5, faker.lorem().paragraph());
                pstmt.setBigDecimal(6, BigDecimal.valueOf(faker.number().randomDouble(2, 50, 5000)));
                pstmt.setTimestamp(7, new java.sql.Timestamp(System.currentTimeMillis()));
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void addReviews(int count) {
        String query = "INSERT INTO reviews (user_id, specialist_id, project_id, rating, comment, date_posted) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                pstmt.setInt(1, faker.number().numberBetween(1, 50)); // Assuming user_id is between 1 and 50
                pstmt.setInt(2, faker.number().numberBetween(1, 50)); // Assuming specialist_id is between 1 and 50
                pstmt.setInt(3, faker.number().numberBetween(1, 50)); // Assuming project_id is between 1 and 50
                pstmt.setInt(4, faker.number().numberBetween(1, 5));
                pstmt.setString(5, faker.lorem().paragraph());
                pstmt.setTimestamp(6, new java.sql.Timestamp(System.currentTimeMillis()));
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void addMessages(int count) {
        String query = "INSERT INTO messages (user_id, recipient_id, message_body, timestamp) VALUES (?, ?, ?, ?)";
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                pstmt.setInt(1, faker.number().numberBetween(1, 50)); // Assuming user_id is between 1 and 50
                pstmt.setInt(2, faker.number().numberBetween(1, 50)); // Assuming recipient_id is between 1 and 50
                pstmt.setString(3, faker.lorem().paragraph());
                pstmt.setTimestamp(4, new java.sql.Timestamp(System.currentTimeMillis()));
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
    public void addSessions(int count) {
        String query = "INSERT INTO sessions (user_id, token, expiry_date) VALUES (?, ?, ?)";
        try (Connection conn = connect();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            for (int i = 0; i < count; i++) {
                pstmt.setInt(1, faker.number().numberBetween(1, 50)); // Assuming user_id is between 1 and 50
                pstmt.setString(2, faker.internet().uuid());
                pstmt.setTimestamp(3, new java.sql.Timestamp(System.currentTimeMillis() + 86400000L)); // 24 hours from now
                pstmt.addBatch();
            }
            pstmt.executeBatch();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        DatabaseManager dbManager = new DatabaseManager();
        int recordCount = 50; // Change this number to the desired number of records to insert per table
        dbManager.addUsers(recordCount);
        dbManager.addCategories(recordCount);
        dbManager.addSpecialists(recordCount);
        dbManager.addTasks(recordCount);
        dbManager.addTowns(recordCount);
        dbManager.addProjects(recordCount);
        dbManager.addReviews(recordCount);
        dbManager.addMessages(recordCount);
        dbManager.addSessions(recordCount);
    }
}