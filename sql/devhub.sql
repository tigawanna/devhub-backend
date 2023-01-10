-- Active: 1673075492855@@127.0.0.1@3306
-- created='2023-01-07 07:10:16.546Z'
-- id='y8znq3g0mllk5bg'
-- user ='hj3t3v442wkxh8b'

-- Active: 1673075492855@@127.0.0.1@3306
select * from posts 
ORDER BY created DESC


-- Active: 1673075492855@@127.0.0.1@3306
select * from reactions rr left JOIN 
posts pp on pp.id = rr.post 



-- Active: 1673075492855@@127.0.0.1@3306
SELECT 
    p.user creator_id,GROUP BY p.id
ORDER BY p.created DESC, p.id DESC
LIMIT 10

    dv.username creator_name,
    dv.avatar creator_image,
    p.id post_id,
    p.body post_body,
    p.media post_media,
    p.created created_at,
    (SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = p.id) likes,
    (SELECT CASE WHEN liked = 'yes' THEN 'yes' ELSE 'no' END FROM reactions
     WHERE user = 'hj3t3v442wkxh8b' AND post = p.id) mylike,
    (CASE WHEN r.id IS NOT NULL THEN r.id ELSE "" END) reaction_id
FROM posts p
LEFT JOIN reactions r on r.post = p.id
LEFT JOIN devs dv on dv.id = p.user
WHERE (p.created < '2023-01-07 07:10:16.546Z' OR (p.created = '2023-01-07 07:10:16.546Z' AND p.id < 'y8znq3g0mllk5bg'))
GROUP BY p.id
ORDER BY p.created DESC, p.id DESC
LIMIT 10



-- Active: 1673075492855@@127.0.0.1@3306
SELECT 
    p.user creator_id,
    (SELECT username FROM devs WHERE id = p.user) creator_name,
    (SELECT avatar FROM devs WHERE id = p.user) creator_image,
    p.id post_id,
    p.body post_body,
    p.media post_media,
    p.created created_at,
    (SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = p.id) likes,
    (SELECT( CASE WHEN liked IS NOT NULL THEN liked ELSE 'null' END)
     FROM reactions WHERE user = 'hj3t3v442wkxh8b' AND post = p.id) mylike,
    (SELECT id FROM reactions WHERE user = 'hj3t3v442wkxh8b' AND post = p.id) reaction_id
FROM posts p
WHERE (p.created < '2023-01-07 07:10:16.546Z' OR (p.created = '2023-01-07 07:10:16.546Z' AND p.id < 'y8znq3g0mllk5bg'))
ORDER BY p.created DESC, p.id DESC
LIMIT 10


-- Active: 1673075492855@@127.0.0.1@3306

SELECT 

pp.user creator_id,
dv.username creator_name,
dv.avatar creator_image,
pp.id post_id,
pp.body post_body,
pp.media post_media,
pp.created created_at,

(SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM reactions WHERE user = 'hj3t3v442wkxh8b' AND post = pp.id),'virgin')mylike,
IFNULL((SELECT id FROM reactions WHERE user = 'hj3t3v442wkxh8b' AND post = pp.id),"virgin") reaction_id,
(SELECT COUNT(*) FROM replies WHERE post = pp.id) replies,
IFNULL((SELECT  id FROM replies WHERE user = 'hj3t3v442wkxh8b' AND post = pp.id),'virgin')myreply


FROM posts pp
LEFT JOIN devs dv on dv.id = pp.user
LEFT join replies rep on rep.post = pp.id 
WHERE (pp.created < '2023-01-10 07:10:16.546Z' OR (pp.created = '2023-01-07 07:10:16.546Z' AND pp.id < 'y8znq3g0mllk5bg'))
ORDER BY pp.created DESC, pp.id DESC
LIMIT 10


-- new query withsub queries

-- SELECT 

-- pp.user creator_id,
-- dv.username creator_name,
-- dv.avatar creator_image,
-- pp.id post_id,
-- pp.body post_body,
-- pp.media post_media,
-- pp.created created_at,

-- (SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = pp.id) likes,
-- IFNULL((SELECT  liked FROM reactions WHERE user = {:user} AND post = pp.id),'virgin')mylike,
-- IFNULL((SELECT id FROM reactions WHERE user = {:user} AND post = pp.id),"virgin") reaction_id
-- FROM posts pp
-- LEFT JOIN devs dv on dv.id = pp.user
-- WHERE (pp.created < {:created} OR (pp.created = {:created} AND pp.id < {:id}))
-- ORDER BY pp.created DESC, pp.id DESC
-- LIMIT 10




--   - old query with joins
--   				select 
-- 					p.user creator_id,
-- 					dv.username creator_name,
-- 		            dv.avatar creator_image,
		          
-- 					p.id    post_id,
-- 					p.body post_body,
-- 					p.media post_media,
-- 					p.created created_at,
					
-- 					(count(CASE WHEN r.liked = 'yes' THEN 1 END)) likes ,
-- 					(CASE WHEN  r.user = {:user} AND r.liked = 'yes'  THEN 'yes' ELSE 'no' END) mylike,
-- 					(CASE WHEN r.id is not NULL THEN  r.id ELSE "" END ) reaction_id
-- 					from posts p
-- 						LEFT JOIN reactions r on r.post = p.id
-- 					LEFT JOIN devs dv on dv.id = p.user
		                
-- 					WHERE (p.created < {:created} 
-- 						OR (p.created = {:created} AND p.id < {:id})
							
-- 					)
		       
-- 				       GROUP BY p.id
-- 					    	ORDER BY p.created DESC, p.id DESC
-- 					  LIMIT 5
