insert into helo_post(
    helo_user_id,
    title,
    url,
    content
) values (
    $1,
    $2,
    #3,
    #4
)
select * from helo_users;