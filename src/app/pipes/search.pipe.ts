import { PipeTransform, Pipe} from '@angular/core'


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    
    
    transform(restaurant:any[],x,text){

        return restaurant.filter((resp)=>{
            if (restaurant) return resp.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
            else return restaurant
        })
       
    }
}