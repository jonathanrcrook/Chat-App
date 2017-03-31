SELECT message
FROM messages
WHERE chat_id IN
(SELECT chat_id
FROM chat_user
WHERE user_id IN (
  SELECT user_id
  FROM users
  WHERE id = $1
));
