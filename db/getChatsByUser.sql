SELECT *
FROM chat c
JOIN chat_user cu
ON c.id = cu.chat_id
WHERE cu.user_id = $1
;
