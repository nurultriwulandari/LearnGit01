select a.id, a.email, b.slug, c.description from users a
left join products b ON a.user_id = b.user_id
left join categories c ON b.slug = c.description
order by a.id ASC;
