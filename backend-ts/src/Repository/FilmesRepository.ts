import Filmes from 'src/Entities/Filmes'
import { EntityRepository, Repository } from 'typeorm'
import { PaginationAwareObject } from 'typeorm-pagination/dist/helpers/pagination'

@EntityRepository(Filmes)
class FilmesRepository extends Repository<Filmes> {
  public BuscarTodos(): Promise<PaginationAwareObject> {
    const query = this.createQueryBuilder('n')
    return query.paginate()
  }

  public PegarPorId(id) {
    return this.findOne({ id }, { relations: ['genero'] })

    // const query = this.createQueryBuilder('n');
    // query.where({id})
    // return query.getOne()
  }

  public PegarPorTitulo(title: string) {
    return this.findOne({ nome })
  }
}

export default FilmesRepository

let email = 'email@email.com'
{
  email
}
