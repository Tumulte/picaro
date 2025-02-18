import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/#/admin');

    await page.getByTestId('login').getByRole('textbox').fill('admin')
    await page.getByTestId('pw').getByRole('textbox').fill('admin')
    await page.keyboard.press('Enter');
})

test('Log in and create app', async ({page}) => {

    await expect(page.getByText('New App')).toBeVisible();

    await page.getByText('New App').click()

    await page.getByTestId('new-app-input').getByRole('textbox').fill('App test')

    await page.getByText('create App').click()

    await expect(page.getByTestId('app name').getByRole('textbox')).toHaveValue('App test');

    await expect(page.getByTestId('app list')).toContainText('App test');

});

test('Creates and edit models', async ({page}) => {
    await page.getByText('App test').first().click()

    await page.getByTestId('model-tab').click()

    await page.getByTestId('new-model-button').click()

    await page.getByTestId('create-model-name-input').getByRole('textbox').fill('model test 1')

    await page.getByTestId('start-model-edit-button').click()

    await page.getByTestId('add-new-field-button').click()

    await page.getByText('none').click()
    await page.getByText('Rich text').click()

    await page.getByTestId('field-name').getByRole('textbox').fill('nametest')
    await page.getByTestId('field-label').getByRole('textbox').fill('label test')

    await page.getByTestId('add-field-button').click()

    await page.getByTestId('save-model').click()

    await expect(page.getByTestId('model list')).toContainText('model test 1');

    await page.getByTestId('edit-name').click()

    await page.getByTestId('edit-name-input').getByRole('textbox').fill('model test')

    await page.getByTestId('edit-name-save').click()

    await expect(page.getByTestId('model list')).toContainText('model test');
})

test('Creates and edit categories', async ({page}) => {
    await page.getByText('App test').first().click()

    await page.getByTestId('model-tab').click()

    await page.getByText('model test').first().click()

    await page.getByTestId('edit-content-tab').click()

    await page.getByTestId('edit-categories').click()

    await page.getByTestId('new-category-input').getByRole('textbox').fill('cat 1')
    await page.getByTestId('new-category-add').click()
    await page.getByTestId('new-category-input').getByRole('textbox').fill('cat 2')
    await page.getByTestId('new-category-add').click()
    await page.getByTestId('separator-check').first().click()

    await page.getByTestId('new-category-save').click()

    await expect(page.getByText('cat 1')).toHaveClass('pic-section');
    await expect(page.getByText('cat 2')).toBeVisible()
})

test('Creates and edit content', async ({page}) => {
    await page.getByText('App test').first().click()

    await page.getByTestId('model-tab').click()

    await page.getByText('model test').first().click()

    await page.getByTestId('edit-content-tab').click()

    await page.getByTestId('rte-editor').getByRole('textbox').fill('test rte content')

    await page.getByTestId('select-categories').click()

    await page.getByText('cat 1').last().click()

    await page.locator("body").click({position: {x: 0, y: 0}});

    await page.getByTestId('content-save').click()

    await expect(page.getByTestId('content-list')).toHaveText('test rte content')
})
