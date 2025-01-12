import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ExtinctAnimalsService {
  private readonly baseUrl = 'https://extinct-api.herokuapp.com/api/v1/animal/';

  // Fetch all extinct animals
  async getAllAnimals(): Promise<any> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch animals: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch extinct animals',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Fetch a single extinct animal by ID
  async getAnimalById(id: string): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch animal with ID: ${id}`);
      }
      return await response.json();
    } catch (error) {
      throw new HttpException(
        error.message || `Failed to fetch animal with ID: ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
