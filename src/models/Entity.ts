export interface Entity {
  id: number;
}

export interface EntityState<T extends Entity = Entity> {
  byId: {
    [id: number]: T;
  };
  selectedId?: number;
  loadingOne: boolean;
  loadingList: boolean;
  errorOne?: string;
}

export const initialEntityState = {
  byId: {},
  loadingOne: false,
  loadingList: false,
};

export const getIds = (entities: Entity[]) => entities.map((e) => e.id);

export const setErrorForOne = (
  state: EntityState,
  id: number,
  message: string
) => {
  if (state.selectedId !== id) {
    return state;
  }
  return { ...state, errorOne: message, loadingOne: false };
};

export const select = (state: EntityState, id: number) => ({
  ...state,
  selectedId: id,
  loadingOne: true,
  errorOne: undefined,
});

export const addOne = (
  state: EntityState,
  entity: Entity,
  loadingOne?: boolean
) => {
  const loading = loadingOne === undefined ? state.loadingOne : loadingOne;
  return {
    ...state,
    byId: { ...state.byId, [entity.id]: entity },
    loadingOne: loading,
  };
};

export const addMany = (state: EntityState, entities: Entity[]) => {
  if (entities.length === 0) {
    return state;
  }
  const entityMap = entities.reduce((prev, entity) => {
    return { ...prev, [entity.id]: entity };
  }, {});
  return {
    ...state,
    byId: { ...state.byId, ...entityMap },
  };
};
