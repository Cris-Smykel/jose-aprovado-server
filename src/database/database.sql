USE jose_aprovado;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE,
    time_spent_on INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE sub_subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    time_spent_on INT,
    subject_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

CREATE TABLE sub_sub_subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    time_spent_on INT,
    sub_subject_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sub_subject_id) REFERENCES sub_subjects(id)
);

CREATE TABLE sub_sub_sub_subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    time_spent_on INT,
    sub_sub_subject_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sub_sub_subject_id) REFERENCES sub_sub_subjects(id)
);

CREATE TABLE sub_sub_sub_sub_subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    time_spent_on INT,
    sub_sub_sub_subject_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sub_sub_sub_subject_id) REFERENCES sub_sub_sub_subjects(id)
);

CREATE TABLE sub_sub_sub_sub_sub_subjects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    time_spent_on INT,
    sub_sub_sub_sub_subject_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sub_sub_sub_sub_subject_id) REFERENCES sub_sub_sub_sub_subjects(id)
);