(() => {
  const text = {
    id: {
      workspace:'RUANG KERJA', products:'Produk', storefront:'Halaman pelanggan', sidebarTitle:'Rekomendasi pilihanmu,<br>di satu tempat.', sidebarDescription:'Perbarui detail dan tautan produk. Perubahan akan tampil di halaman pelanggan.', creatorAccount:'Akun kreator', affiliatePartner:'Mitra afiliasi', yourCatalog:'KATALOG ANDA', catalogSubtitle:'Kelola produk yang ingin Anda bagikan.', searchProducts:'Cari produk', allCategories:'Semua kategori', chooseCategory:'Pilih kategori', refresh:'Segarkan', loading:'Memuat produk…', emptyTitle:'Katalog Anda dimulai di sini', emptyDescription:'Tambahkan produk untuk dibagikan kepada audiens Anda.', addProduct:'Tambah produk', addFirstProduct:'Tambah produk pertama', driveFootnote:'Pastikan foto di Google Drive dapat dilihat oleh siapa saja yang memiliki tautannya.', productDetails:'DETAIL PRODUK', addTitle:'Tambah produk', editTitle:'Edit produk', productName:'Nama produk', priceRupiah:'Harga (Rupiah)', priceHint:'Masukkan angka saja; tampilan akan otomatis menjadi format Rupiah.', category:'Kategori', productPhoto:'Foto produk', photoHint:'Pilih foto. Foto akan diunggah ke folder Drive sesuai tanggal.', photoAttached:'Foto terlampir', affiliateLink:'Tautan produk afiliasi', shortDescription:'Deskripsi singkat', descriptionPlaceholder:'Apa yang membuat produk ini menarik?', featureProduct:'Jadikan produk unggulan', cancel:'Batal', saveProduct:'Simpan produk', copyError:'Salin pesan error', darkMode:'Mode gelap', lightMode:'Mode terang', notConnected:'Tidak terhubung', connected:'Terhubung', previewMode:'Mode pratinjau', connectionIssue:'Masalah koneksi', uncategorized:'Tanpa kategori', featured:'UNGGULAN', noDescription:'Belum ada deskripsi.', edit:'Edit', delete:'Hapus', productCount:n=>`${n} produk`, saveSuccess:'Produk berhasil disimpan.', deleteSuccess:'Produk dihapus.', deleteConfirm:name=>`Hapus “${name}”?`, uploading:'Mengunggah ke folder Drive hari ini…', photoUploaded:name=>`Terunggah ke ${name}. Foto akan disimpan bersama produk ini.`, saveFailed:error=>`Gagal menyimpan: ${error}`, photoFailed:error=>`Gagal mengunggah foto: ${error}`, apiPreview:'Mode pratinjau: tambahkan URL API Sheets di app.js untuk mengaktifkan unggah dan publikasi.', loadFailed:error=>`${error} Periksa endpoint dan pengaturan berbagi.`
    },
    en: {
      workspace:'WORKSPACE', products:'Products', storefront:'Customer storefront', sidebarTitle:'Your recommendations,<br>all in one place.', sidebarDescription:'Keep product details and links fresh. Changes appear on your customer storefront.', creatorAccount:'Creator account', affiliatePartner:'Affiliate partner', yourCatalog:'YOUR CATALOG', catalogSubtitle:'Manage the things you love sharing.', searchProducts:'Search your products', allCategories:'All categories', chooseCategory:'Choose a category', refresh:'Refresh', loading:'Loading your products…', emptyTitle:'Your catalog starts here', emptyDescription:'Add a product to share it with your audience.', addProduct:'Add product', addFirstProduct:'Add your first product', driveFootnote:'Make sure anyone with the link can view your Google Drive photos.', productDetails:'PRODUCT DETAILS', addTitle:'Add product', editTitle:'Edit product', productName:'Product name', priceRupiah:'Price (Rupiah)', priceHint:'Enter numbers only; the page formats the amount as Rupiah.', category:'Category', productPhoto:'Product photo', photoHint:'Choose a photo. It will upload to a dated Drive folder.', photoAttached:'Photo attached', affiliateLink:'Affiliate product link', shortDescription:'Short description', descriptionPlaceholder:'What makes this product worth sharing?', featureProduct:'Feature this product', cancel:'Cancel', saveProduct:'Save product', copyError:'Copy error message', darkMode:'Dark mode', lightMode:'Light mode', notConnected:'Not connected', connected:'Connected', previewMode:'Preview mode', connectionIssue:'Connection issue', uncategorized:'Uncategorized', featured:'FEATURED', noDescription:'No description added yet.', edit:'Edit', delete:'Delete', productCount:n=>`${n} product${n===1?'':'s'}`, saveSuccess:'Product saved.', deleteSuccess:'Product deleted.', deleteConfirm:name=>`Delete “${name}”?`, uploading:'Uploading to today’s Drive folder…', photoUploaded:name=>`Uploaded to ${name}. It will be saved with this product.`, saveFailed:error=>`Could not save: ${error}`, photoFailed:error=>`Photo upload failed: ${error}`, apiPreview:'Preview mode: add your Sheets API URL in app.js to enable uploads and publishing.', loadFailed:error=>`${error} Check the endpoint and sharing settings.`
    }
  };
  Object.assign(text.id,{namePlaceholder:'Contoh: Tas kanvas harian',pricePlaceholder:'Masukkan angka, contoh: 250000',imageTypesHint:'JPG, PNG, GIF atau WebP · maks. 8 MB',addCategoryOption:'＋ Tambah kategori baru',newCategoryPlaceholder:'Nama kategori baru',newCategoryHint:'Kategori baru akan disimpan saat produk disimpan.'});
  Object.assign(text.en,{namePlaceholder:'e.g. Everyday canvas tote',pricePlaceholder:'Enter digits, e.g. 250000',imageTypesHint:'JPG, PNG, GIF, or WebP · max 8 MB',addCategoryOption:'＋ Add a new category',newCategoryPlaceholder:'New category name',newCategoryHint:'The new category will be saved with the product.'});
  Object.assign(text.id,{allStatuses:'Semua status',statusFilter:'Filter berdasarkan status',changeStatusHint:'Ubah status produk',statusSaved:'Status produk berhasil diperbarui.',status_available:'Tersedia',status_soldout:'Habis',status_restock:'Dalam proses restock'});
  Object.assign(text.en,{allStatuses:'All statuses',statusFilter:'Filter by status',changeStatusHint:'Change product status',statusSaved:'Product status updated.',status_available:'Available',status_soldout:'Sold out',status_restock:'Restocking'});
  let language = localStorage.getItem('fieldnoteLanguage') || 'id';
  const t = (key, ...args) => { const value = text[language][key] ?? text.id[key] ?? key; return typeof value === 'function' ? value(...args) : value; };
  function apply() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)); });
    document.querySelectorAll('[data-lang]').forEach(el => el.classList.toggle('active', el.dataset.lang === language));
    document.querySelector('#addProductTop').textContent = '＋ ' + t('addProduct');
    document.querySelector('#addProduct').textContent = '＋ ' + t('addProduct');
    document.querySelector('#emptyAdd').textContent = '＋ ' + t('addFirstProduct');
    document.querySelector('#refreshButton').innerHTML = '↻ &nbsp;' + t('refresh');
    document.querySelector('#loading').textContent = t('loading');
    document.querySelector('#searchInput').setAttribute('aria-label', t('searchProducts'));
    document.title=language==='id'?'Studio Kreator · Fieldnote':'Creator Studio · Fieldnote';
    document.querySelector('#catalogCategoryFilter').setAttribute('aria-label', t('allCategories'));
    document.querySelector('#closeDialog').setAttribute('aria-label', t('cancel'));
    document.querySelector('#themeToggle').setAttribute('aria-label',t(document.body.classList.contains('dark-mode')?'lightMode':'darkMode'));
    document.querySelector('#cancelDialog').textContent=t('cancel');
    document.querySelector('#saveButton').textContent=t('saveProduct');
    document.querySelector('#copyErrorButton').textContent=t('copyError');
    const dark = document.body.classList.contains('dark-mode');
    document.querySelector('#themeToggle').textContent = (dark ? '☀ ' : '☾ ') + t(dark ? 'lightMode' : 'darkMode');
    window.dispatchEvent(new CustomEvent('languagechange'));
  }
  function translateDynamic(){
    const count=document.querySelector('#resultCount');
    if(count){const n=Number((count.textContent.match(/\d+/)||['0'])[0]),value=language==='id'?`${n} produk`:`${n} product${n===1?'':'s'}`;if(count.textContent!==value)count.textContent=value;}
    const title=document.querySelector('#dialogTitle');
    if(title&&(title.textContent==='Add product'||title.textContent==='Tambah produk')&&title.textContent!==t('addTitle'))title.textContent=t('addTitle');
    if(title&&(title.textContent==='Edit product'||title.textContent==='Edit produk')&&title.textContent!==t('editTitle'))title.textContent=t('editTitle');
    const connection=document.querySelector('#connectionText');
    if(connection){const value=connection.textContent;let translated='';if(['Not connected','Tidak terhubung'].includes(value))translated=t('notConnected');else if(['Connected','Terhubung'].includes(value))translated=t('connected');else if(['Preview mode','Mode pratinjau'].includes(value))translated=t('previewMode');else if(['Connection issue','Masalah koneksi'].includes(value))translated=t('connectionIssue');if(translated&&connection.textContent!==translated)connection.textContent=translated;}
    document.querySelectorAll('.product-card').forEach(card=>{
      const meta=card.querySelector('.card-meta span:first-child');if(meta&&['Uncategorized','Tanpa kategori'].includes(meta.textContent)&&meta.textContent!==t('uncategorized'))meta.textContent=t('uncategorized');
      const feature=card.querySelector('.featured-tag');if(feature&&feature.textContent!==t('featured'))feature.textContent=t('featured');
      const description=card.querySelector('.description');if(description&&['No description added yet.','Belum ada deskripsi.'].includes(description.textContent)&&description.textContent!==t('noDescription'))description.textContent=t('noDescription');
      card.querySelectorAll('.icon-button').forEach(button=>{if(['Edit','Edit produk'].includes(button.textContent)&&button.textContent!==t('edit'))button.textContent=t('edit');if(['Delete','Hapus'].includes(button.textContent)&&button.textContent!==t('delete'))button.textContent=t('delete')});
    });
    document.querySelectorAll('#category option:first-child,#catalogCategoryFilter option:first-child').forEach(option=>{const value=option.parentElement.id==='category'?t('chooseCategory'):t('allCategories');if(option.textContent!==value)option.textContent=value});
    const addCategory=document.querySelector('#category option[value="__new__"]');if(addCategory&&addCategory.textContent!==t('addCategoryOption'))addCategory.textContent=t('addCategoryOption');
    const photo=document.querySelector('#uploadStatus');if(photo&&(photo.textContent.startsWith('Choose a photo.')||photo.textContent.startsWith('Pilih foto.'))&&photo.textContent!==t('photoHint'))photo.textContent=t('photoHint');
    if(photo&&['Uploading to today’s Drive folder…','Mengunggah ke folder Drive hari ini…'].includes(photo.textContent)&&photo.textContent!==t('uploading'))photo.textContent=t('uploading');
    if(photo){const match=photo.textContent.match(/(?:Uploaded to|Terunggah ke) (\d{4}-\d{2}-\d{2})\./);if(match){const value=language==='id'?`Terunggah ke ${match[1]}. Foto akan disimpan bersama produk ini.`:`Uploaded to ${match[1]}. It will be saved with this product.`;if(photo.textContent!==value)photo.textContent=value}}
    const notice=document.querySelector('#notice');if(notice){const known={'Product saved.':'saveSuccess','Produk berhasil disimpan.':'saveSuccess','Product deleted.':'deleteSuccess','Produk dihapus.':'deleteSuccess'};if(known[notice.textContent]&&notice.textContent!==t(known[notice.textContent]))notice.textContent=t(known[notice.textContent]);}
    const saveStatus=document.querySelector('#saveStatus');if(saveStatus){const match=saveStatus.textContent.match(/^(?:Gagal menyimpan|Could not save):\s*(.*)$/);if(match){const value=language==='id'?'Gagal menyimpan: '+match[1]:'Could not save: '+match[1];if(saveStatus.textContent!==value)saveStatus.textContent=value}}
    const placeholder=document.querySelector('#emptyState h2');if(placeholder&&placeholder.textContent!==t('emptyTitle'))placeholder.textContent=t('emptyTitle');
    const emptyDescription=document.querySelector('#emptyState p');if(emptyDescription&&emptyDescription.textContent!==t('emptyDescription'))emptyDescription.textContent=t('emptyDescription');
    document.querySelectorAll('.copy-error-button').forEach(button=>{if(['Tersalin','Copied'].includes(button.textContent)){const copied=language==='id'?'Tersalin':'Copied';if(button.textContent!==copied)button.textContent=copied}else if(button.textContent!==t('copyError'))button.textContent=t('copyError')});
  }
  const dynamicObserver=new MutationObserver(translateDynamic);
  dynamicObserver.observe(document.querySelector('#productGrid'),{childList:true,subtree:true,characterData:true});
  dynamicObserver.observe(document.querySelector('#productDialog'),{childList:true,subtree:true,characterData:true});
  dynamicObserver.observe(document.querySelector('#connectionText'),{childList:true,characterData:true});
  dynamicObserver.observe(document.querySelector('#notice'),{childList:true,characterData:true});
  dynamicObserver.observe(document.querySelector('#category'),{childList:true,subtree:true});
  dynamicObserver.observe(document.querySelector('#catalogCategoryFilter'),{childList:true,subtree:true});
  window.addEventListener('languagechange',translateDynamic);
  window.t = t;
  window.setPageLanguage = next => { language = next; localStorage.setItem('fieldnoteLanguage', next); apply(); };
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => window.setPageLanguage(button.dataset.lang)));
  document.querySelector('#themeToggle').addEventListener('click', () => {
    const dark = !document.body.classList.contains('dark-mode');
    document.body.classList.toggle('dark-mode', dark);
    localStorage.setItem('fieldnoteTheme', dark ? 'dark' : 'light');
    apply();
  });
  document.body.classList.toggle('dark-mode', localStorage.getItem('fieldnoteTheme') === 'dark');
  apply();
})();
