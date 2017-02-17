/* tslint:disable */

declare var Object: any;
export interface PairInterface {
  title: string;
  description: string;
  id?: number;
}

export class Pair implements PairInterface {
  title: string;
  description: string;
  id: number;
  constructor(data?: PairInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pair`.
   */
  public static getModelName() {
    return "Pair";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pair for dynamic purposes.
  **/
  public static factory(data: PairInterface): Pair{
    return new Pair(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Pair',
      plural: 'Pairs',
      properties: {
        title: {
          name: 'title',
          type: 'string'
        },
        description: {
          name: 'description',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
