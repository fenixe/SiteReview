$(function () {
    var app = window.app || {};

    //define domain content view
    var DomainContent = Backbone.View.extend({
        el: $('#domain-content'),
        contentTpl: _.template($('#domain-content-tpl').html()),
        model: app.domainModel,

        initialize: function () {
            this.listenTo(this.model, 'change:Domain', this.setDomainInfo, this);
        },

        setDomainInfo: function () {
            $('#first-info').hide();   // hide first information block
            $(this.el).html(this.contentTpl(this.model.toJSON()));
        }
    });

    //create instance of domain content view
    app.domainContent = new DomainContent();
});

