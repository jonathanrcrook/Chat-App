INSERT INTO messages (chat_id, user_id, message)
VALUES ($1, $2, $3)
RETURNING *
;
