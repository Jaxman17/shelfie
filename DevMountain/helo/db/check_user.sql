select b.helo_user_id, b.helo_user_username, b.helo_user_password from helo_users b 
join helo_posts a on b.helo_user_id = a.helo_user_id
where b.helo_user_id = $1