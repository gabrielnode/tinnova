import { VehicleEntity } from '@/infrastructure/entities/'
import { EntityRepository, Repository } from 'typeorm'
import { IVehicle } from '@/domain/model'
import { NotFoundException } from '@nestjs/common'
import { IRepository } from '@/domain/repositories'

@EntityRepository(VehicleEntity)
export class VehicleRepository extends Repository<VehicleEntity> implements IRepository<IVehicle, IVehicle> {
  async findAll(): Promise<VehicleEntity[]> {
    return await this.find()
  }

  async findById(id: string): Promise<VehicleEntity> {
    const vehicle = await this.findOne(id)
    delete vehicle.id
    return vehicle
  }

  async findByDate() {
    const date = new Date()
    const result = await this.createQueryBuilder('vehicle')
      .where('vehicle.createdAt >= :start_at', { start_at: date })
      .getMany()
    console.log(result)
    console.log(date)
    return result
  }
  async findByCondition(value: Object): Promise<VehicleEntity[]> {
    const filter = Object.keys(value)
      .map(function (key) {
        return value[key] && { [key]: value[key] }
      })
      .filter(Boolean)
      .reduce((a, b) => Object.assign(a, b), {})
    const res = await this.find({
      where: {
        ...filter
      }
    })
    console.log(res)
    return res
  }

  async addNew(data: IVehicle): Promise<VehicleEntity> {
    return await this.save(data)
  }

  async edit(id: string, data: IVehicle): Promise<void> {
    const vehicle = await this.findOne({ id })
    if (!vehicle) {
      throw new NotFoundException()
    }
    const result = await this.update(
      { id },
      {
        ...data
      }
    )
    return result.raw
  }
  async deleteByCondition(id: string): Promise<void> {
    const vehicle = await this.findOne({ id })
    if (!vehicle) {
      throw new NotFoundException()
    }
    await this.delete({ id })
  }
}
