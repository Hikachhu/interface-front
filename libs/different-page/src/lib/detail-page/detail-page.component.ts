import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Sensor, SensorType, Station} from "@interface-front/entity";
import {SensorDao, SensorTypeDao, StationDao} from "@interface-front/storage";

@Component({
  selector: 'interface-front-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less'],
})
export class DetailPageComponent implements OnInit {

  id!: any | null;
  sensor: Sensor | undefined
  listId:Sensor []=[]
  listStation: Station[] | undefined;
  listStationType: SensorType[] | undefined;
  constructor(private route:ActivatedRoute,
              private sensorDao:SensorDao,
              private stationDao:StationDao,
              private sensorTypeDao:SensorTypeDao){
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe( params =>
      this.id=params['id']
    )
    this.sensor=this.sensorDao.getById(1)

    if(this.sensorDao.returnArray().length==0)this.listId=[]
    else this.listId=this.sensorDao.returnArray()

    this.listStation=this.stationDao.returnArray()
    this.listStationType=this.sensorTypeDao.returnArray()
  }
}
