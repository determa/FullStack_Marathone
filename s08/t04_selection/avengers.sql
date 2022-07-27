SELECT
    heroes.id,
    heroes.name,
    SUM(heroes_powers.power_points) AS points
FROM
    heroes
    INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    LEFT JOIN powers ON heroes_powers.power_id = powers.id
GROUP BY
    heroes.id
ORDER BY
    points DESC
LIMIT
    1;

SELECT
    heroes.id,
    heroes.name,
    SUM(heroes_powers.power_points) AS points
FROM
    heroes
    INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    LEFT JOIN powers ON heroes_powers.power_id = powers.id
GROUP BY
    heroes.id
ORDER BY
    SUM(heroes_powers.power_points) ASC
LIMIT
    1;

SELECT
    heroes.id,
    heroes.name,
    SUM(heroes_powers.power_points) AS points,
    teams.name AS team_name
FROM
    heroes
    LEFT JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    LEFT JOIN powers ON heroes_powers.power_id = powers.id
    LEFT JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    LEFT JOIN teams ON heroes_teams.team_id = teams.id
WHERE
    teams.name = 'Avengers'
GROUP BY
    heroes.id
HAVING
    COUNT(heroes_teams.hero_id) = 1
ORDER BY
    SUM(heroes_powers.power_points) DESC;

SELECT
    teams.name AS team_name,
    SUM(heroes_powers.power_points) AS points
FROM
    heroes_teams
    JOIN teams ON heroes_teams.team_id = teams.id
    JOIN heroes_powers ON heroes_teams.team_id = heroes_powers.hero_id
    JOIN powers ON heroes_powers.power_id = powers.id
WHERE
    teams.name = 'Avengers'
    OR teams.name = 'Hydra'
GROUP BY
    teams.name
ORDER BY
    SUM(heroes_powers.power_points);