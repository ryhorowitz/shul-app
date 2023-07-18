# seeds
puts '📃 Seeding data...'

User.create(username: 'rywitz', password: '1234', password_confirmation: '1234')
User.create(username: 'doodyhead', password: '1234', password_confirmation: '1234')
User.create(username: 'mr. softee', password: '1234', password_confirmation: '1234')
User.create(username: 'celia', password: '1234', password_confirmation: '1234')
User.create(username: 'person 5', password: '1234', password_confirmation: '1234')

Shul.create(name: 'B\'nai Abraham', movement: 'Chabad')
Shul.create(name: 'Rodeph Shalom', movement: 'Reform')
Shul.create(name: 'Beth Zion Beth Israel', movement: 'Conservative')
Shul.create(name: 'Kol Tzedek', movement: 'Reconstructionist')
Shul.create(name: 'Shtiebel', movement: 'Modern Orthodox')

20.times do
  Review.create(
    title: Faker::Lorem.sentence(word_count: rand(4..6)),
    body: Faker::Lorem.paragraph_by_chars(number: rand(200..300)),
    user_id: rand(1..5),
    shul_id: rand(1..5)
  )
end

puts 'Seed Complete!'
