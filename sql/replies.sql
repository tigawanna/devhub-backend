-- Active: 1673075492855@@127.0.0.1@3306

SELECT * from replies




-- Active: 1673075492855@@127.0.0.1@3306
SELECT 

pp.user creator_id,
dv.username creator_name,
dv.avatar creator_image,
pp.id op_post_id,
pp.body reply_body,
pp.media reply_media,
pp.created replied_at,
pp.depth reply_depth,
pp.parent replying_to,


(SELECT COUNT(*) FROM reactions WHERE liked = 'yes' AND post = pp.id) likes,
IFNULL((SELECT  liked FROM reactions WHERE user = 'hj3t3v442wkxh8b' AND post = pp.id),'virgin')mylike,
IFNULL((SELECT id FROM reactions WHERE user = 'hj3t3v442wkxh8b' AND post = pp.id),"virgin") reaction_id,
(SELECT COUNT(*) FROM replies WHERE post = pp.id) replies,
IFNULL((SELECT  id FROM replies WHERE user = 'hj3t3v442wkxh8b' AND post = pp.id),'virgin')myreply


FROM replies pp
LEFT JOIN devs dv on dv.id = pp.user
LEFT join replies rep on rep.post = pp.id 
WHERE (
    (pp.created < '2023-03-10 07:10:16.546Z' OR 
    (pp.created = '2023-03-07 07:10:16.546Z' AND pp.id < 'y8znq3g0mllk5bg')) 
    AND pp.post="dajznzoixyykmdz" AND pp.parent = "p5rw50hhkrx9hej"
  )
ORDER BY pp.created DESC, pp.id DESC
LIMIT 10
