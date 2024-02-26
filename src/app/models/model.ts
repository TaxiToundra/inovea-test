export class Model3D {
  id: string;
  name: string;
  description: string;
  date: string;
  author: string;
  polygons: number;
  modelName: string;


  constructor(id: string, name: string, description: string, date: string, author: string, polygons: number, modelName: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.author = author;
    this.polygons = polygons;
    this.modelName = modelName;
  }
}

export class Model3DModify {
  name: string;
  description: string;
  date: string;
  author: string;
  polygons: number;
  modelName: string;

  constructor(name: string, description: string, date: string, author: string, polygons: number, modelName: string) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.author = author;
    this.polygons = polygons;
    this.modelName = modelName;
  }
}
