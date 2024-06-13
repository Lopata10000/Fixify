
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


