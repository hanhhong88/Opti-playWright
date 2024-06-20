import {expect, test } from '@playwright/test';
test('Download pdf file', async ({ page , headless}) => {

  await page.goto('https://www.ericsson.com/en');
    console.log(headless);

    await page.locator("a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll").click();
    await page.locator("a[title = 'Link to pdf document']").scrollIntoViewIfNeeded();


  if(headless){
    const [download, click]= await Promise.all([
      page.waitForEvent('download'),
      page.locator("a[title = 'Link to pdf document']").click()
    ]

    )
    // const downloadPromise = page.waitForEvent('download')
    // await page.locator("a[title = 'Link to pdf document']").click();
    // const download = await downloadPromise;
    // console.log(download.suggestedFilename());
    expect(download.suggestedFilename()).toEqual("modern-slavery-and-human-trafficking-statement.pdf");
  }

  else {
    const [newPage] = await Promise.all([
      page.waitForEvent('load'),
      page.locator("a[title = 'Link to pdf document']").click()
    ])

    newPage.on('response', async (response) => {
      expect.soft(response.headers()['content-type']).toBe('application/pdfs')
    })

    await newPage.reload();
  }
  });