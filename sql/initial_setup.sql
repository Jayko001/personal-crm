CREATE TABLE contacts (
    user_id varchar PRIMARY KEY,
    contact_id SERIAL,
    first_name text NOT NULL,
    last_name text,
    location text,
    contact_type text,
    frequency int,
    contact_medium text,
    last_contact timestamp,
    next_contact timestamp,
    due bool
);