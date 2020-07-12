/*  ------------------------ this is the principale application scripts  -------------------------*/


/*------------------------------------*\
    MAIN
\*------------------------------------*/


$(document).ready(function() {

    try {
        /*================= intialisation plugins  ========================*/
        // tooltip
        $('[data-toggle="tooltip"]').tooltip()
            // popovers 
            // validate tsks 

        $(".validate-tasks-popover-btn").popover({
            html: true,
            content: function() {
                var content = $('#validateTasksPopover').clone();
                return $(content).children(".popover-body");
            }
        });

        $(".validate-tasks-popover-btn").on('click', function(e) {
                e.preventDefault();
                $('body').find('.validate-tasks-popover-body').closest('.popover').addClass('validate-popover');
                $(this).find('.dotes-icon ').toggleClass('toggled');
            })
            // dateTime inits
        function initDateLimit(btn) {
            $('.datepicker').datetimepicker('remove');
            $('.setdate-limit').datetimepicker({
                inline: true,
                sideBySide: true,
                format: 'DD/MM/YYYY'
            });
            $('.setdate-limit').on('dp.change', function(e) {
                btn.find('span').text(e.date.format('DD/MM/YYYY'))
            })
        }
        $(".set-date-limit-btn").popover({
            html: true,
            content: function() {
                var content = $('#datePopover').clone();
                return $(content).children(".popover-body");
            }
        });

        $(".set-date-limit-btn").on('click', function(e) {
            e.preventDefault();
            $('body').find('.date-popover-row').closest('.popover').addClass('date-popover');
            $(this).find('.dotes-icon').toggleClass('toggled');
            initDateLimit($(this));
        })

        $('.init-datetimepicker').datetimepicker({
            format: 'DD/MM/YYYY'
        });


        // change radio 

        $('input[name=r-source]').on('change', function(e) {
            if ($(this).is(":checked")) {
                $('.source-conrollers').find('label').removeClass('in');
                $(this).parent().addClass('in');
            }
        })

        // show filter modal in load 
        $('#addFilter').modal('show');

        /*================= End intialisation plugins  ========================*/


        /*=================  Events ========================*/

        $('.under-tasks-toggle').on('click', function(e) {
            e.preventDefault();
            const trIndex = $(this).closest('tr').index();
            $(this).closest('table').find('tr').eq(trIndex + 2).toggleClass('in');
        })

        $('.under-triaged-tasks-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('in');
            const trIndex = $(this).closest('tr').index();
            $(this).closest('table').find('tr').eq(trIndex + 2).toggleClass('in');
        })

        // show collaborators 
        function showCollaborateursPanel(button) {
            var offset = button.offset();

            $(".add-collaborateurs-panel")
                .addClass('fade-in')
                .css({
                    left: Math.min(offset.left, $(window).innerWidth() - $(".add-collaborateurs-panel").outerWidth()),
                    top: offset.top - 15,
                    width: button.innerWidth(),
                });
        }
        $('.show-collaborateurs-panel').on('click', function(e) {
            e.preventDefault();
            showCollaborateursPanel($(this))
        })
        $('.close-collaborateurs-panel').on('click', function(e) {
            e.preventDefault();
            $('.add-collaborateurs-panel').removeClass('fade-in');
        })

        /*================= End Events ========================*/
    } catch {
        console.log('something\'s wrong : this is error from main.js script');
    }
})