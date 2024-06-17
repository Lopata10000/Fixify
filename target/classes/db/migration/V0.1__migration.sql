
DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users') THEN
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            full_name VARCHAR(255),
            phone_number VARCHAR NOT NULL ,
            address VARCHAR(255),
            registration_date TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            role VARCHAR(40) NOT NULL
        );
    END IF;
END
$$;

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'categories') THEN
        CREATE TABLE categories (
                                    category_id SERIAL PRIMARY KEY,
                                    category_name VARCHAR(100) NOT NULL UNIQUE,
                                    parent_id INT,
                                    CONSTRAINT fk_parent
                                        FOREIGN KEY (parent_id)
                                            REFERENCES categories(category_id)
                                            ON DELETE SET NULL,
                                    CONSTRAINT valid_parent
                                        CHECK (parent_id IS NULL OR parent_id <> category_id)                    );
    END IF;
END
$$;

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'specialists') THEN
        CREATE TABLE specialists (
            specialist_id SERIAL PRIMARY KEY,
            user_id INT UNIQUE,
            category_id INT NOT NULL,
            description TEXT,
            rating NUMERIC(3, 2) NOT NULL DEFAULT 0.0,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
        );
    END IF;
END
$$;



DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'towns') THEN
        CREATE TABLE towns (
            town_id SERIAL PRIMARY KEY,
            town_name VARCHAR(100) NOT NULL UNIQUE
        );
    END IF;
END
$$;
INSERT INTO projects (title, description, user_id, specialist_id, category_id, town_id, address, budget, status)
VALUES
    ('Project 1', 'Description for project 1', 117, 100, 1, 1, '123 Main St', 1000.00, 'В роботі'),
    ('Project 2', 'Description for project 2', 117, 100, 1, 1, '124 Main St', 1500.00, 'Очікує'),
    ('Project 3', 'Description for project 3', 117, 100, 1, 1, '125 Main St', 2000.00, 'Архів'),
    ('Project 4', 'Description for project 4', 117, 100, 1, 1, '126 Main St', 2500.00, 'В роботі'),
    ('Project 5', 'Description for project 5', 117, 100, 1, 1, '127 Main St', 3000.00, 'Очікує'),
    ('Project 6', 'Description for project 6', 117, 100, 1, 1, '128 Main St', 3500.00, 'Архів'),
    ('Project 7', 'Description for project 7', 117, 100, 1, 1, '129 Main St', 4000.00, 'В роботі'),
    ('Project 8', 'Description for project 8', 117, 100, 1, 1, '130 Main St', 4500.00, 'Очікує'),
    ('Project 9', 'Description for project 9', 117, 100, 1, 1, '131 Main St', 5000.00, 'Архів'),
    ('Project 10', 'Description for project 10', 117, 100, 1, 1, '132 Main St', 5500.00, 'В роботі');
DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'projects') THEN
        CREATE TABLE projects (
            project_id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            user_id INT NOT NULL,
            specialist_id INT,
            category_id INT NOT NULL,
            town_id INT NOT NULL,
            address VARCHAR NOT NULL,
            budget NUMERIC(10, 2) NOT NULL,
            status VARCHAR(50) NOT NULL,
            date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (town_id) REFERENCES towns(town_id) ON DELETE CASCADE,
            FOREIGN KEY (specialist_id) REFERENCES specialists(specialist_id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
        );
    END IF;
END
$$;

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'reviews') THEN
        CREATE TABLE reviews (
            review_id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            specialist_id INT NOT NULL,
            project_id INT NOT NULL,
            rating INT NOT NULL,
            comment TEXT,
            date_posted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (specialist_id) REFERENCES specialists(specialist_id) ON DELETE CASCADE,
            FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
        );
    END IF;
END
$$;



