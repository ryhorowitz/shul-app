# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "📃 Seeding data..."

user_1 = User.create(username: 'rywitz', password: '1234', password_confirmation: '1234' ) 
user_2 = User.create(username: 'doodyhead', password: '1234', password_confirmation: '1234' ) 
user_3 = User.create(username: 'mr. softee', password: '1234', password_confirmation: '1234' ) 
user_4 = User.create(username: 'celia', password: '1234', password_confirmation: '1234' ) 
user_5 = User.create(username: 'person 5', password: '1234', password_confirmation: '1234' ) 

users_arr = [user_1, user_2, user_3, user_4, user_5]

shul_1 = Shul.create(name: 'B\'nai Abraham', movement: 'Chabad')
shul_2 = Shul.create(name: 'Rodeph Shalom', movement: 'Reform')
shul_3 = Shul.create(name: 'Beth Zion Beth Israel', movement: 'Conservative')
shul_4 = Shul.create(name: 'Kol Tzedek', movement: 'Reconstructionist')
shul_5 = Shul.create(name: 'Shtiebel', movement: 'Modern Orthodox')

20.times do
  Review.create(
    title: Faker::Lorem.sentence(word_count: rand(4..6))
    body: review = Faker::Lorem.paragraph_by_chars(number: rand(200..300))
    user_id: rand(1..5)
    shul_id: rand(1..5)
end