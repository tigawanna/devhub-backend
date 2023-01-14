-- Active: 1673075492855@@127.0.0.1@3306
PRAGMA index_list('reactions');

-- Active: 1673075492855@@127.0.0.1@3306
DROP index 'reaction_user_post_idx'

-- Active: 1673075492855@@127.0.0.1@3306
SELECT * FROM reactions

-- Active: 1673075492855@@127.0.0.1@3306
CREATE UNIQUE INDEX reaction_user_post_idx ON 
reactions (user, post);


-- Active: 1673075492855@@127.0.0.1@3306
CREATE UNIQUE INDEX reply_reaction_user_post_idx ON 
reply_reactions (user, post);
