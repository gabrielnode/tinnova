import { IVehicle } from '@/domain/model'
import { IRepository } from '@/domain/repositories'
import { Inject, Injectable } from '@nestjs/common'
import { UsecasesModule } from '../usecases.module'
import _ from 'lodash'
import { handleVerifyLastWeek } from '@/shared/utils/functions'
@Injectable()
export class VehicleUsecase {
  constructor(
    @Inject(UsecasesModule.VEHICLE_REPOSITORY)
    private readonly vehicleRepository: IRepository<IVehicle, IVehicle>
  ) {}

  async getVehicleAll() {
    return await this.vehicleRepository.findAll()
  }
  async getVehicleByDecade() {
    const vehicles = await this.vehicleRepository.findAll()
    const filter = vehicles.map((item) => {
      const decade = Math.floor(item.year / 10) * 10
      return { [decade]: item.year }
    })
    return _.countBy(filter, (vehicleYearDecade) => Object.entries(vehicleYearDecade)[0][0])
  }

  async getVehicleLastDate() {
    const vehicles = await this.vehicleRepository.findAll()
    const vehiclesLastWeek = vehicles.filter(async (vehicle) => {
      return handleVerifyLastWeek(vehicle.createdAt)
    })

    return vehiclesLastWeek
  }
  async getVehicleByBrand() {
    const vehicles = await this.vehicleRepository.findAll()
    return _.countBy(vehicles, (vehicle) => Object.entries(vehicle)[2][1])
  }
  async getVehicle(data: IVehicle) {
    return this.vehicleRepository.findByCondition(data)
  }

  async getVehicleDetails(id: string) {
    return this.vehicleRepository.findById(id)
  }

  async addVehicle(data: IVehicle) {
    return this.vehicleRepository.addNew(data)
  }

  async updateVehicle(id: string, data: IVehicle): Promise<void> {
    return this.vehicleRepository.edit(id, data)
  }

  async deleteVehicle(id: string) {
    return this.vehicleRepository.deleteByCondition(id)
  }
}
