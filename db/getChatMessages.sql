SELECT m.id, m.chat_id, m.user_id, m.message, m.timestamp, u.name as sender, u.profile_img
FROM chat c
JOIN messages m
ON c.id = m.chat_id
JOIN users u
ON m.user_id = u.id
WHERE c.id = $1
;
