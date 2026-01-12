import mysql.connector
from mysql.connector import Error

DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "q1wq1wq1w",
    "port": 3306,
}

DB_NAME = "reg"


def create_database_if_not_exists():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        cursor = connection.cursor()

        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {DB_NAME} "
                       f"CHARACTER SET utf8mb4 "
                       f"COLLATE utf8mb4_unicode_ci")

        print(f"База данных '{DB_NAME}' готова")

    except Error as e:
        raise RuntimeError(f"Ошибка создания БД: {e}")

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()


def create_users_table():
    connection = mysql.connector.connect(
        **DB_CONFIG,
        database=DB_NAME
    )
    cursor = connection.cursor()

    try:
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                phone VARCHAR(32),
                login VARCHAR(64) NOT NULL UNIQUE,
                password VARCHAR(64) NOT NULL,
                date_registration TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        connection.commit()

        print("Таблица users готова")

    finally:
        cursor.close()
        connection.close()


def create_user(full_name, email, phone, login, password_hash):
    connection = mysql.connector.connect(
        **DB_CONFIG,
        database=DB_NAME
    )
    cursor = connection.cursor()

    try:
        cursor.execute("""
            INSERT INTO users (full_name, email, phone, login, password)
            VALUES (%s, %s, %s, %s, %s) 
        """, (full_name, email, phone, login, password_hash))

        connection.commit()
        id = cursor.lastrowid

    finally:
        cursor.close()
        connection.close()

    return id

def verify_user_credentials_plain(login_value, password):
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)

    try:
        cursor.execute("""
            SELECT *
            FROM users
            WHERE login = %s AND password = %s
            LIMIT 1
        """, (login_value, password))

        user = cursor.fetchone()
        return user

    finally:
        cursor.close()
        connection.close()


def get_db_connection():
    return mysql.connector.connect(
        **DB_CONFIG,
        database=DB_NAME
    )
