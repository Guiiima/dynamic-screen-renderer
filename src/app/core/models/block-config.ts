export interface BlockConfig {
  id: string;             
  type: string;           
  data: any;             
  slots?: {               
    [key: string]: BlockConfig[]; 
  };
}