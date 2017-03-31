SELECT *
FROM chat
JOIN messages
ON chat.id = messages.chat_id
WHERE chat.id = $1
;
