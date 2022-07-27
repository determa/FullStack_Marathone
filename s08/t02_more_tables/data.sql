USE ucode_web;

INSERT INTO
    powers(name, type)
VALUES
    ('Crimson Pact', 'attack'),
    ('Blade of Moonlight', 'defense'),
    ('Cytokinesis', 'attack'),
    ('Living forge', 'defense'),
    ('Agile Fighter', 'attack'),
    ('Spider queen', 'attack'),
    ('Victory over death', 'attack'),
    ('Shurima legacy', 'defense'),
    ('Thorn garden', 'defense'),
    ('Herald of the ancient deity', 'attack'),
    ('bloody fist', 'attack'),
    ('iron shield', 'defense'),
    ('iron shield', 'defense');

INSERT INTO
    races(name)
VALUES
    ('Human'),
    ('Kree'),
    ('Eternal'),
    ('Elf');

INSERT INTO
    teams(name)
VALUES
    ('Avengers'),
    ('Alliance'),
    ('Celestials'),
    ('Horde'),
    ('Eternal'),
    ('Hydra');

INSERT INTO
    heroes_powers(hero_id, power_id, power_points)
VALUES
    (1, 1, '300'),
    (2, 4, '700'),
    (3, 5, '350'),
    (4, 2, '400'),
    (5, 7, '1000'),
    (6, 8, '320'),
    (7, 3, '440'),
    (8, 9, '750'),
    (3, 2, '666'),
    (4, 3, '222'),
    (2, 3, '555');

INSERT INTO
    heroes_teams(hero_id, team_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 3),
    (8, 2),
    (10, 1),
    (3, 5),
    (6, 1),
    (4, 2),
    (4, 6);


UPDATE
    heroes
SET
    race_id = 1
WHERE
    class_role = 'dps'
    OR class_role = 'healer';

UPDATE
    heroes
SET
    race_id = 3
WHERE
    class_role = 'tankman';