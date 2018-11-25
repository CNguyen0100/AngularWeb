export class ProjectModel{
  id: string;
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  projectUrl: string;

  constructor(obj?: any){
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.subtitle = obj && obj.subtitle || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.projectUrl = obj && obj.projectUrl || null;
  }


}
