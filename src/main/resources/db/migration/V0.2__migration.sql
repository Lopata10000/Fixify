-- Перевірка наявності таблиці перед її створенням
DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'users') THEN
        -- Створення таблиці "Користувачі"
CREATE TABLE users
(
    user_id       SERIAL PRIMARY KEY,
    email         VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name     VARCHAR(255),
    phone_number  VARCHAR(20),
    address       VARCHAR(255)
);
registration_date
TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
role VARCHAR(20) NOT NULL,


END IF;
END $$;

DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'specialist_categories') THEN
        -- Створення таблиці "Категорії фахівців"
CREATE TABLE specialist_categories
(
    category_id   SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);
END IF;
END $$;



DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'reviews') THEN
        -- Створення таблиці "Відгуки"
CREATE TABLE reviews
(
    review_id    SERIAL PRIMARY KEY,
    author_id    INT       NOT NULL,
    recipient_id INT       NOT NULL,
    rating       INT       NOT NULL,
    comment      TEXT,
    date_posted  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users (user_id) ON DELETE CASCADE,
    FOREIGN KEY (recipient_id) REFERENCES users (user_id) ON DELETE CASCADE
);
END IF;
END $$;

DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'specialists') THEN
        -- Створення таблиці "Фахівці"
CREATE TABLE specialists
(
    specialist_id    SERIAL PRIMARY KEY,
    user_id          INT UNIQUE,
    category_id      INT           NOT NULL,
    description      TEXT,
    rating           NUMERIC(3, 2) NOT NULL DEFAULT 0.0,
    services_offered TEXT,
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES specialist_categories (category_id) ON DELETE CASCADE
);
END IF;
END $$;

DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'projects') THEN
        -- Створення таблиці "Проекти/Послуги"
CREATE TABLE projects
(
    project_id  SERIAL PRIMARY KEY,
    author_id   INT            NOT NULL,
    category_id INT            NOT NULL,
    title       VARCHAR(255)   NOT NULL,
    description TEXT,
    budget      NUMERIC(10, 2) NOT NULL,
    date_posted TIMESTAMP      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users (user_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES specialist_categories (category_id) ON DELETE CASCADE
);
END IF;
END $$;

DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'messages') THEN
        -- Створення таблиці "Чат/Повідомлення"
CREATE TABLE messages
(
    message_id   SERIAL PRIMARY KEY,
    sender_id    INT       NOT NULL,
    recipient_id INT       NOT NULL,
    message_body TEXT,
    timestamp    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users (user_id) ON DELETE CASCADE,
    FOREIGN KEY (recipient_id) REFERENCES users (user_id) ON DELETE CASCADE
);
END IF;
END $$;

DO
$$
BEGIN
    IF
NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'sessions') THEN
        -- Створення таблиці "Сесії"
CREATE TABLE sessions
(
    session_id  SERIAL PRIMARY KEY,
    user_id     INT          NOT NULL,
    token       VARCHAR(255) NOT NULL,
    expiry_date TIMESTAMP    NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
);
END IF;
END $$;
