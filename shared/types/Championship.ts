export interface ChampionshipSectionsPhase {
  phaseId: string;
  phaseBaseId: number;
  phaseName: string;
  phaseType: {
    phaseTypeId: number;
    phaseTypeName: string;
  };
  phaseSubType: {
    phaseSubTypeId: number;
    phaseSubTypeName: string;
  };
}
