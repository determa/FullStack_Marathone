SELECT
    heroes.id,
    heroes.name,
    heroes.description,
    heroes.class_role,
    teams.name AS team_name
FROM
    heroes
    LEFT JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    LEFT JOIN teams ON heroes_teams.team_id = teams.id;

SELECT
    heroes.id,
    heroes.name,
    heroes.description,
    heroes.class_role,
    powers.name AS powers_name,
    powers.type,
    powers.*
FROM
    heroes
    LEFT JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    LEFT JOIN powers ON heroes_powers.power_id = powers.id
UNION
SELECT
    heroes.id,
    heroes.name,
    heroes.description,
    heroes.class_role,
    powers.name AS powers_name,
    powers.type,
    powers.*
FROM
    heroes
    LEFT JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    RIGHT JOIN powers ON heroes_powers.power_id = powers.id;

SELECT
    heroes.id,
    heroes.name,
    heroes.description,
    heroes.class_role,
    teams.name AS team_name,
    powers.name AS power_name,
    powers.type
FROM
    heroes
    INNER JOIN heroes_teams ON heroes.id = heroes_teams.hero_id
    LEFT JOIN teams ON heroes_teams.team_id = teams.id
    INNER JOIN heroes_powers ON heroes.id = heroes_powers.hero_id
    LEFT JOIN powers ON heroes_powers.power_id = powers.id;