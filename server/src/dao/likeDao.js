const { Op } = require('sequelize');
const { Like, User, Song } = require('../models/index');

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Like.create(params)
        .then((inserted) => {
          const insertedResult = { ...inserted };
          delete insertedResult.dataValues.password;
          resolve(inserted);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  
  selectList(params) {
    const setQuery = {};
  
    if (params.user_id) {
      setQuery.include = [{
        model: User,
        where: { user_id: params.user_id },
        attributes: [] // Exclude user attributes from the result
      }];
    }
  
    setQuery.order = [['user_id', 'ASC']];
  
    return new Promise((resolve, reject) => {
      Like.findAndCountAll({
        ...setQuery,
        include: [{
          model: Song,
          attributes: ['id', 'video_id'] // Include song attributes if needed
        }]
      })
        .then((selectedList) => {
          const result = selectedList.rows.map((like) => {
            const { userId, songId, Song } = like.get();
            return {
              userId,
              songId,
              Song: {
                id: Song.id,
                video_id: Song.video_id
              }
            };
          });
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  

  selectInfo(params) {
    return new Promise((resolve, reject) => {
      // User.findAll
      Like.findByPk(params.id, {
        include: [
          {
            model: User,
            as: 'User',
          },
        ],
      })
        .then((selectedInfo) => {
          resolve(selectedInfo);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      // Like.findAll
      Like.update(params, {
        where: { id: params.id },
      })
        .then(([updated]) => {
          resolve({ updatedCount: updated });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      // Like.findAll
      Like.destroy({
        where: { id: params.id },
      })
        .then((deleted) => {
          resolve({ deletedCount: deleted });
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  selectLike(params) {
    return new Promise((resolve, reject) => {
      Like.findOne({
        attributes: ['id', 'likeId', 'password', 'name', 'role'],
        where: { likeid: params.likeid },
      })
        .then((selectedOne) => {
          resolve(selectedOne);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};


//   // where 검색 조건
  //   const setQuery = {};
  //   if (params.userId) {
  //     setQuery.where = {
  //       ...setQuery.where,
  //       userId: { [Op.like]: `%${params.userId}%` }, // like검색
  //     };
  //   }
  //   if (params.userId) {
  //     setQuery.where = {
  //       ...setQuery.where,
  //       userId: params.userId, // like검색
  //     };
  //   }
  //   setQuery.order = [['like', 'DESC']];
  //   return new Promise((resolve, reject) => {
  //     Like.findAll({
  //       ...setQuery,
  //       attributes: { exclude: ['password'] },
  //       include: [
  //         {
  //           model: User,
  //           as: 'User',
  //         },
  //       ],
  //     })
  //       .then((selectedList) => {
  //         resolve(selectedList);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // },
  // 내정보 조회
   
  // async selectList(params) {
  //   const user = await User.findOne({
  //     where: { user_id: params.user_id },
  //     // limit: 30,
  //   });
  //   const like = await Like.findAll({
  //     where : {user_id : user.user_id}, attributes: ["like"],
  //     order: [["like", "DESC"]],
  //   })

  //   // const userSkin = await UserSkin.findOne({
  //   //   where: { active_skin: true, user_id: userInfo.user_id },
  //   //   attributes: ["skin_id"],
  //   // });

  //   // let skinName = null;
  //   // if (userSkin) {
  //   //   const skin = await Skin.findOne({
  //   //     where: { skin_id: userSkin.skin_id },
  //   //     attributes: ["skin"],
  //   //   });
  //   //   skinName = skin ? skin.skin : null;
  //   // }

  //   return {
  //     like,
  //     // userScores,
  //     // userSkin,
  //     // skinName,
  //   };
  // },  

module.exports = dao;
