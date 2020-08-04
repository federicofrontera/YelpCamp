const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');
const User = require('./models/user');
const passport = require("passport");

async function seedUser() {
/*    User.deleteMany({}, function () {

    });*/
    const username = {username: 'test user'},
        password = '123';

    return user = User.register(username, password)
        .catch(function () {
            return User.findOne(username).exec();
        });
}


const campgrounds = [
    {
        name: "Tilcara",
        price: '10',
        image: "https://images.unsplash.com/photo-1568740700094-3aa254e34daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!",
        coordinates: [-65.36400725897624,-23.569499527608272]
    },
    {
        name: "Iguazu",
        price: '10',
        image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Foz_de_Igua%C3%A7u_27_Panorama_Nov_2005.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!",
        coordinates: [-54.6155043621975,-26.024154911176346]
    },
    {
        name: "Madryn",
        price: '10',
        image: "data:image/jpeg;base64,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",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur necessitatibus facere illum laudantium sed eius ipsam expedita dolores! Eligendi, officiis maiores? Nostrum facere corporis hic commodi exercitationem reiciendis quia ab modi accusamus praesentium numquam quae ipsa voluptatum, totam nobis, dolorem delectus obcaecati facilis est laboriosam dolorum! Dolorem recusandae harum deserunt consequatur, impedit cupiditate eum officia dolorum soluta illo tempore, nemo possimus magni, id repellendus fuga consectetur sunt. Quod aliquam sint, doloribus reprehenderit exercitationem est modi animi ullam quae. Eos suscipit aperiam odio quae nam, veniam esse voluptate sapiente voluptatibus? Eum, consequuntur modi nobis vitae ab velit. Culpa totam ad soluta quis dolor non aperiam assumenda cum eaque. Reiciendis officia iure quibusdam, quo voluptatum vero quos vitae enim laudantium! Temporibus illum illo exercitationem accusamus, dicta, sapiente, corrupti nemo est non assumenda eligendi sint molestiae tempore obcaecati dolores porro fugit repellat deserunt magnam modi quod. Maiores amet vitae a labore hic laborum repellendus eos, quae voluptate consectetur fugiat, deserunt recusandae, tempore quisquam id incidunt autem porro esse? Similique deleniti possimus deserunt necessitatibus reprehenderit provident explicabo sit laudantium natus delectus, ipsam accusamus voluptatum aut quis, fugiat id minus! Quod, id impedit recusandae, nobis eligendi veniam nulla vel repellat fugiat, quo qui? Natus, exercitationem!",
        coordinates: [-65.03773250862196,-42.77002493493132]
    }
]

/*async function seedUser2() {
    const seedUsername = {username: 'test user'},
        seedPassword = {password: '123'},
        options = {new: true, upsert: true, setDefaultsOnInsert: true};
    let seededUser;

    return seededUser = await User.findOneAndUpdate(seedUsername, seedPassword, options,
        function (err, result) {
            if(!err){
                seededUser = result; //I want seedUser() to return this value
            }
        });
}*/

async function seedDB() {

    let user = await seedUser()
    console.log('Register ' + user.username);
    Campground.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Remove campgrounds");
            //remove comments
            Comment.deleteMany({}, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Remove comments");
                }
            })
            //add demo campgrounds
            campgrounds.forEach(function (seed) {
                Campground.create(seed, function (err, savedCampground) {
                    if (err) {
                        console.log(err);
                    } else {
                        savedCampground.author = user;
                        //add demo comment
                        Comment.create({
                            text: "Test comment added by seed function",
                            author: user
                        }, function (err, savedComment) {
                            if (err) {
                                console.log(err);
                            } else {
                                savedCampground.comments.push(savedComment);
                                savedCampground.save();
                                console.log("Added a campground: " + savedCampground.name +
                                    " - added by: " + savedCampground.author.username);
                            }
                        })

                    }
                })
            })

        }
    })

}


module.exports = seedDB;