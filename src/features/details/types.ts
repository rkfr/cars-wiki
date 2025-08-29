import type { Picture } from '../../types';

export interface ModelDetailsSpec {
  key: string;
  value: string;
}

interface ModelDetailsChasis {
  assistingSystems: ModelDetailsSpec;
  drivetrainArchitecture: ModelDetailsSpec;
  driveWheel: ModelDetailsSpec;
  frontBrakes: ModelDetailsSpec;
  frontSuspension: ModelDetailsSpec;
  numberOfGearsAndTypeOfGearbox: ModelDetailsSpec;
  rearBrakes: ModelDetailsSpec;
  rearSuspension: ModelDetailsSpec;
  tiresSize: ModelDetailsSpec;
  wheelRimsSize: ModelDetailsSpec;
}

interface ModelDetailsDimensions {
  frontOverhang: ModelDetailsSpec;
  frontTrack: ModelDetailsSpec;
  height: ModelDetailsSpec;
  length: ModelDetailsSpec;
  minimumTurningCircle: ModelDetailsSpec;
  rearOverhang: ModelDetailsSpec;
  rearTrack: ModelDetailsSpec;
  wheelbase: ModelDetailsSpec;
  width: ModelDetailsSpec;
}

interface ModelDetailsEngine {
  compressionRatio: ModelDetailsSpec;
  coolant: ModelDetailsSpec;
  cylinderBore: ModelDetailsSpec;
  engineAspiration: ModelDetailsSpec;
  engineConfiguration: ModelDetailsSpec;
  engineDisplacement: ModelDetailsSpec;
  engineLayout: ModelDetailsSpec;
  engineModelCode: ModelDetailsSpec;
  engineOilCapacity: ModelDetailsSpec;
  engineOilSpecification: ModelDetailsSpec;
  fuelInjectionSystem: ModelDetailsSpec;
  numberOfCylinders: ModelDetailsSpec;
  numberOfValvesPerCylinder: ModelDetailsSpec;
  pistonStroke: ModelDetailsSpec;
  power: ModelDetailsSpec;
  powerPerLitre: ModelDetailsSpec;
  torque: ModelDetailsSpec;
  valvetrain: ModelDetailsSpec;
}

interface ModelDetailsPerformance {
  accelerationTo60Mph: ModelDetailsSpec;
  accelerationTo100Kmh: ModelDetailsSpec;
  co2Emissions: ModelDetailsSpec;
  emissionStandard: ModelDetailsSpec;
  fuelConsumption: ModelDetailsSpec;
  fuelType: ModelDetailsSpec;
  maximumSpeed: ModelDetailsSpec;
  weightToPpowerRatio: ModelDetailsSpec;
  weightToPtorqueRatio: ModelDetailsSpec;
}

interface ModelDetaisGeneralInfo {
  bodyType: ModelDetailsSpec;
  brand: ModelDetailsSpec;
  doors: ModelDetailsSpec;
  endOfProduction: ModelDetailsSpec;
  generation: ModelDetailsSpec;
  model: ModelDetailsSpec;
  modification: ModelDetailsSpec;
  powertrainArchitecture: ModelDetailsSpec;
  seats: ModelDetailsSpec;
  startOfProduction: ModelDetailsSpec;
}

export enum ModelDetailsSectionName {
  GENERAL = 'generalInformation',
  PERFORMANCE = 'performanceSpecs',
  ENGINE = 'engineSpecs',
  CHASIS = 'chassisSpecs',
  DIMENSIONS = 'dimensions',
}

export interface ModelDetaisSections {
  [ModelDetailsSectionName.CHASIS]: ModelDetailsChasis;
  [ModelDetailsSectionName.DIMENSIONS]: ModelDetailsDimensions;
  [ModelDetailsSectionName.ENGINE]: ModelDetailsEngine;
  [ModelDetailsSectionName.GENERAL]: ModelDetaisGeneralInfo;
  [ModelDetailsSectionName.PERFORMANCE]: ModelDetailsPerformance;
}

export type ModelDetaisSection = ModelDetaisSections[keyof ModelDetaisSections];

export interface ModelDetailsPage {
  gallery: Picture[];
  sections: ModelDetaisSections;
  title: string;
}
