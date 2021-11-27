import { Request, Response } from 'express'
import { getManager, Entity } from 'typeorm'
import Filmes from 'src/Entities/Filmes'
import { getCustomRepository } from 'typeorm'
import FilmesRepository from 'src/Repository/FilmesRepository'

class FilmesController {
  async index(request: Request, response: Response) {
    const filmesRepository = getCustomRepository(FilmesRepository)
    const filmes = await filmesRepository.BuscarTodos()
    response.json({
      status: 'success',
      data: filmes
    })
  }
  async view(request: Request, response: Response) {
    const filmesRepository = getCustomRepository(FilmesRepository)
    const { id } = request.params
    const filmes = await filmesRepository.PegarPorId(id)

    response.json({
      status: 'success',
      data: filmes
    })
  }

  async create(request: Request, response: Response) {
    try {
      const filmesRepository = getCustomRepository(FilmesRepository)

      const { nome, sinopse, poster, faturamento, genero } = request.body

      const FilmesAlreadyExists = await filmesRepository.PegarPorTitulo(nome)

      if (typeof FilmesAlreadyExists !== 'undefined') {
        return response.status(409).json({
          status: 'fail',
          data: {
            title: 'Um filme com o mesmo título já existe no banco de dados;'
          }
        })
      }

      let filmes = new Filmes()
      filmes.nome = nome
      filmes.sinopse = sinopse
      filmes.poster = poster
      filmes.faturamento = faturamento
      filmes.genero = genero
      filmes = await filmesRepository.save(filmes)

      return response.status(201).json({
        status: 'success',
        data: {
          title: 'Filme cadastrado com sucesso!',
          news: filmes
        }
      })
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        data: {
          error: error.message
        }
      })
    }
  }

  async update(request: Request, response: Response) {
    const filmesRepository = getCustomRepository(FilmesRepository)
    const { id } = request.params
    let filmes = await filmesRepository.PegarPorId(id)

    const { nome, sinopse, poster, faturamento, genero } = request.body

    filmes.nome = nome
    filmes.sinopse = sinopse
    filmes.poster = poster
    filmes.faturamento = faturamento
    filmes.genero = genero
    filmes = await filmesRepository.save(filmes)

    return response.json(filmes)
  }

  async delete(request: Request, response: Response) {
    const filmesRepository = getCustomRepository(FilmesRepository)
    const { id } = request.params
    let filmes = await filmesRepository.PegarPorId(id)

    await filmesRepository.delete(filmes)
    return response.json({ msg: 'Filme excluido com suceso!' })
  }

  getAllCategories(request: Request, response: Response) {
    return response.json({
      status: 'success',
      data: [
        {
          id_genero: 1,
          nome: 'Esportes'
        },
        {
          id_genero: 2,
          nome: 'Moda'
        },
        {
          id_genero: 3,
          nome: 'Gastronomia'
        },
        {
          id_genero: 4,
          nome: 'Política'
        },
        {
          id_genero: 5,
          nome: 'Entretenimento'
        }
      ]
    })
  }
}

export default new FilmesController()
