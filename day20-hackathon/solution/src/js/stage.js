class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.entities = [];
  }

  render() {
    const stageElm = document.createElement('div');
    stageElm.className = 'stage';
    stageElm.style.width = `${this.width * TILE_SIZE}px`;
    stageElm.style.height = `${this.height * TILE_SIZE}px`;
    return stageElm;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);

    fetch(`http://bootcamp.podlomar.org/api/pacman?width=${this.width}&height=${this.height}`)
      .then(resp => resp.json())
      .then((pacmanMap) => {
        this.loadEntitiesFromJson(pacmanMap.walls, ENTITY_WALL);
        this.loadEntitiesFromJson(pacmanMap.apples, ENTITY_APPLE);
        this.loadEntitiesFromJson(pacmanMap.bombs, ENTITY_BOMB);
      });
  }

  loadEntitiesFromJson(entitiesJson, type) {
    for (const ent of entitiesJson) {
      this.addEntity(new Entity(ent.x, ent.y, type));
    }
  }

  addEntity(entity) {
    entity.mount(this.element);
    this.entities.push(entity);
  }

  removeEntity(entity) {
    const idx = this.entities.indexOf(entity);
    if (idx > -1) {
      this.entities.splice(idx, 1);
      entity.unmount();
    }
  }

  withinBorders(x, y) {
    if (x >= this.width || y >= this.height) {
      return false;
    }

    if (x < 0 || y < 0) {
      return false;
    }

    return true;
  }

  detectCollision(x, y) {
    for (const entity of this.entities) {
      if (entity.xpos === x && entity.ypos === y) {
        return entity;
      }
    }

    return null;
  }
}
