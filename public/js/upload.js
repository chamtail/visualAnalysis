/**
 * Created by Jeremy on 2018/11/10.
 */
function myupload(config) {
    if (!config) {
        var config = {
            container: 'upload-wrapper',
            browse: 'pickfiles',
            url: 'upload.php',
            img_types: 'jpg,gif,png',
            zip_types: 'zip',
            filelist: 'filelist',
            uploadfiles: 'uploadfiles',
            file_size: '10mb',
            is_multi: true
        };
    }
    var uploader = new plupload.Uploader({
        runtimes: 'html5',
        browse_button: config.browse, // you can pass an id...
        container: document.getElementById(config.container), // ... or DOM Element itself
        url: config.url,
        flash_swf_url: './plupload/Moxie.swf',
        silverlight_xap_url: './plupload/Moxie.xap',
        prevent_duplicates: true,
        filters: {
            /*max_file_size : config.file_size,
             mime_types: [
             {title : "Image files", extensions : config.img_types},
             {title : "Zip files", extensions : config.zip_types}
             ]*/
        },

        init: {
            PostInit: function () {
                //document.getElementById(config.filelist).innerHTML = '';

                document.getElementById(config.uploadfiles).onclick = function () {
                    uploader.start();
                    return false;
                };
            },

            FilesAdded: function (up, files) {
                if (config.is_multi) {
                    plupload.each(files, function (file) {
                        document.getElementById(config.filelist).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                    });
                } else {
                    up.splice(0, up.files.length - 1);
                    var file = files[files.length - 1];
                    document.getElementById(config.filelist).innerHTML = '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                }
            },

            UploadProgress: function (up, file) {
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            },

            Error: function (up, err) {
                document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
            },
            FileUploaded: config.onUploaded
        }
    });

    uploader.init();
    return uploader;
}