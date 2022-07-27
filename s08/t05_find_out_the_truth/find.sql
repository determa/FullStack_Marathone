USE ucode_web;

SELECT
    heroes.name
FROM
    heroes
    LEFT JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
WHERE
    heroes.name LIKE '%a%'
    AND heroes.race_id != 1
    AND (
        heroes.class_role = 'tankman'
        OR heroes.class_role = 'healer'
    )
GROUP BY
    heroes.id
HAVING
    COUNT(heroes_teams.hero_id) >= 2
ORDER BY
    heroes.id DESC
LIMIT
    1;