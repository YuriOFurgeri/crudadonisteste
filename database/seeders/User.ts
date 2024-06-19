import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password'
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: 'password'
      },
      {
        name: 'Jim Beam',
        email: 'jim.beam@example.com',
        password: 'password'
      },
    ])
  }
}
