10.times do
    department = Department.create(
        name: Faker::Commerce.department,
        description: Faker::PrincessBride.quote
    )
    # this can be done seperately
    100.times do
        department.items.create(
            name: Faker::Commerce.product_name,
            description: Faker::PrincessBride.quote,
            price: Faker::Commerce.price.to_f,
            # department_id: department.id, department.items gives department id
            image_url: Faker::Avatar.image
        )
        # 10.times.do
        # i.reviews.create (
        # title: Faker::BreakingBad. ,
        # body: Faker::BackToTheFuture.quote,
        # raiting: rand(1..5),



        # )
    end
end

puts "10 depts"
puts "100 items seeded "
puts "reviewed up yo!"