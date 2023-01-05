/**
 * @jest-environment jsdom
 */

import getItemCount from '../src/modules/item-counter.js';

describe('Counting all items on the page', () => {
  test('should return 0 when there is no item in container', () => {
    // Arrange
    document.body.innerHTML = '<ul class="gallery"></ul>';
    const container = document.querySelector('.gallery');
    container.innerHTML = '';
    // Act
    const totalItems = getItemCount();
    // Assert
    expect(totalItems).toBe(0);
  });

  test('should return 10 when there is 10 elements with "character-card" class', () => {
    // Arrange
    document.body.innerHTML = '<ul class="gallery"></ul>';
    const container = document.querySelector('.gallery');
    for (let i = 0; i < 10; i += 1) container.innerHTML += '<li class="character-card"></li>';
    // Act
    const totalItems = getItemCount();
    // Assert
    expect(totalItems).toBe(10);
  });

  test('should return 1 when only one element has "character-card" class', () => {
    // Arrange
    document.body.innerHTML = '<ul class="gallery"></ul>';
    const container = document.querySelector('.gallery');
    for (let i = 0; i < 10; i += 1) container.innerHTML += '<li></li>';
    container.innerHTML += '<li class="character-card"></li>';
    // Act
    const totalItems = getItemCount();
    // Assert
    expect(totalItems).toBe(1);
  });
});
