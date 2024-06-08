
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
            registration_date TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,            role VARCHAR(40) NOT NULL
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
            CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES categories(category_id) ON DELETE SET NULL

                                );
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
            services_offered TEXT,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE CASCADE
        );
    END IF;
END
$$;

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'tasks') THEN
        CREATE TABLE tasks (
            task_id SERIAL PRIMARY KEY,
            task_name VARCHAR(255) NOT NULL,
            category_id INT,
            FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE SET NULL
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

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'projects') THEN
        CREATE TABLE projects (
            project_id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            specialist_id INT NOT NULL,
            category_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            budget NUMERIC(10, 2) NOT NULL,
            date_posted TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
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

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'messages') THEN
        CREATE TABLE messages (
            message_id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            recipient_id INT NOT NULL,
            message_body TEXT,
            timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (recipient_id) REFERENCES users(user_id) ON DELETE CASCADE
        );
    END IF;
END
$$;

DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'sessions') THEN
        CREATE TABLE sessions (
            session_id SERIAL PRIMARY KEY,
            user_id INT NOT NULL,
            token VARCHAR(255) NOT NULL,
            expiry_date TIMESTAMP NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
        );
    END IF;
END
$$;
