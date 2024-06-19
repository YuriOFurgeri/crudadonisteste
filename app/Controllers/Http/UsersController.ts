import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    return response.json(users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.create(data)
    return response.status(201).json(user)
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return response.json(user)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.findOrFail(params.id)
    user.merge(data)
    await user.save()
    return response.json(user)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.status(204).json(null)
  }
}
