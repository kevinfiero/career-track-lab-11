DROP TABLE IF EXISTS BOOKS;

CREATE TABLE BOOKS (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title TEXT NOT NULL,
	cover_image TEXT NOT NULL,
	rating INTEGER NOT NULL,
	price DECIMAL NOT NULL,
	in_stock BOOLEAN NOT NULL
);