import { describe, expect, it } from 'vitest';
import { content } from './content';

// Os componentes usam o próprio texto como `key` das listas: ele precisa ser único em cada lista.
function duplicates(values: string[]): string[] {
  return values.filter((value, i) => values.indexOf(value) !== i);
}

describe.each(Object.entries(content))('conteúdo (%s)', (_lang, t) => {
  it('listas de cards não repetem títulos', () => {
    expect(duplicates(t.about.paragraphs)).toEqual([]);
    expect(duplicates(t.hero.highlights.map((item) => item.label))).toEqual([]);
    expect(duplicates(t.projects.list.map((item) => item.name))).toEqual([]);
    expect(duplicates(t.projects.work.map((item) => item.title))).toEqual([]);
    expect(duplicates(t.projects.others.map((item) => item.name))).toEqual([]);
    expect(duplicates(t.skills.groups.map((item) => item.title))).toEqual([]);
    expect(duplicates(t.experience.roles.map((role) => `${role.title}-${role.period}`))).toEqual([]);
    expect(duplicates(t.experience.competencies.map((item) => item.title))).toEqual([]);
    expect(duplicates(t.education.items.map((item) => item.title))).toEqual([]);
    expect(duplicates(t.interests.list.map((item) => item.title))).toEqual([]);
    expect(duplicates(t.projects.demo.examples)).toEqual([]);
  });

  it('nenhum card repete tag ou item', () => {
    const tagLists = [...t.projects.list, ...t.projects.work, ...t.skills.groups, ...t.interests.list].map((card) => card.tags);
    for (const tags of tagLists) expect(duplicates(tags)).toEqual([]);
    for (const role of t.experience.roles) expect(duplicates(role.items)).toEqual([]);
  });

  it('todo projeto em destaque com imagem tem texto alternativo', () => {
    for (const project of t.projects.list) {
      if (project.image) expect(project.imageAlt, project.name).toBeTruthy();
    }
  });
});
