export class Task {
  constructor(
    public title: string,
    public notes: string,
    public remaindMe?: Date,
    public done = false,
    public createdat = new Date(),
    public id?: number
  ){}

}
